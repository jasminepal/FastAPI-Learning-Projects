# this is for  pydantic 
from pydantic import BaseModel

class Products(BaseModel):
    id: int
    name: str
    description: str
    price: float
    quantity: int

    # def __init__(self, id: int, name:str, desc: str):
    #     self.id = id
    #     self.name = name
    #     self.desc = desc