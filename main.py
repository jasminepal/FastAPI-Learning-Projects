#done till 1:38 hrs: mins
from fastapi import FastAPI, Depends
from models import Products
from database import session, engine
import database_models
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=['*']
)

database_models.Base.metadata.create_all(bind=engine)

@app.get("/")
def greet():
    return "Welcome home"

products = [
    Products(id=1, name="ravi", description="here is", price=99, quantity=5),
    Products(id=2, name="nikhil", description="two", price=100, quantity=8)
]

def get_db_conection():
    db = session()
    try: 
        yield db
    finally:
        db.close()

def init_db():
    db = session() # connection to db

    count = db.query(database_models.Products).count()  # this is to check the db is avoinding create the connection evertime i save my code to ignore issues

    if count == 0:
        for product in products:
            db.add(database_models.Products(**product.model_dump()))

        db.commit()
init_db()

@app.get("/products")
def all_products(db: Session = Depends(get_db_conection)):
    db_products = db.query(database_models.Products).all()  # database_models.Products --> this type of the product we wanted and .all() to get all elements of Products type
    return db_products

@app.get("/products/{id}")
def get_product_by_id(id: int, db: Session = Depends(get_db_conection)):
    db_product = db.query(database_models.Products).filter(database_models.Products.id == id).first()
    if db_product:
        return db_product
    return "Product not found"

# add data
@app.post("/products")
def add_product(item: Products, db: Session = Depends(get_db_conection)):
    db.add(database_models.Products(**item.model_dump()))
    db.commit()
    return item

# update data
@app.put("/products/{id}")
def update_proudtc(id: int, product: Products, db: Session = Depends(get_db_conection)):
    db_product = db.query(database_models.Products).filter(database_models.Products.id == id).first()
    if db_product:
        db_product.name = product.name
        db_product.description = product.description
        db_product.price = product.price
        db_product.quantity = product.quantity
        db.commit()
        return "Product updated"
    else:
        return "Product not found"

# delete product
@app.delete("/products/{id}")
def delete_product(id: int, db: Session = Depends(get_db_conection)):
    db_product = db.query(database_models.Products).filter(database_models.Products.id == id).first()
    if db_product:
        db.delete(db_product)
        db.commit()
        return "Product deleted"
    else:
        return "Product not found"