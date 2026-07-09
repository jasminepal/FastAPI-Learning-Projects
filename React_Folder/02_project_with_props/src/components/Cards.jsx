import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
    
  return (
    <div>
      <div className="card">
            <div>
                <div className="top">
                    <img src={props.logo} alt="" />
                    <button>Save <Bookmark color="#1a1616" strokeWidth={0.75} />  </button>
                </div>

                <div className="center">
                    <div className="name">{props.company} <span>{props.freshness}</span></div>
                    <div className="role">{props.role}</div>
                    <div className="multiple_tags">
                        <div className="tag1">{props.tag1}e</div>
                        <div className="tag2">{props.tag2}</div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="price_place">
                    <div className="price">{props.salary}</div>
                    <p>{props.place}</p>
                </div>
                
                <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
