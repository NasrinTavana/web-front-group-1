import { Collapse, Divider } from 'antd';
import "./collapse.css";
import 'bootstrap/dist/css/bootstrap.css';
const image1 = [
    <div className='d-flex justify-content-between'>
        <p>Credit Card</p>
        <img className='img' src="./image/mastercard.png" alt="" />
    </div>
]
const content = [
    <>
    <div>
        <p>Card No :</p>
        <input className='w-100' type='text' placeholder='1234-5678-9123-4567'/>
    </div>
    <div className='d-flex'>
        <div className='col-md-4 pt-2'>
            <label htmlFor="">Expiry Month</label>
            <select>
                <option value="">--select--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
        <div className='col-md-4 pt-2'>
            <label htmlFor="">Expiry Year</label>
            <select>
                <option value="">--select--</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
            </select>
        </div>
        <div className='col-md-4 pt-2'>
            <label htmlFor="">CVV Code</label>
            <input className='col-12 h-50' type="text" placeholder='Enter CVV'/>
        </div>
    </div>
    </>
]
const image2 = [
    <div className='d-flex justify-content-between'>
         <p>Paypal</p>
        <img className='img' src="./image/paypal.png" alt="" />
    </div>
]
const content1=[
    <div>
        <input className='w-100 pt-2 pb-2' type="text" placeholder='Add Paypal from page'/>
    </div>
]

const Collapse1 = () => (
  <>
  <div className='col12 lable rounded-1'>
    <Collapse 
    
      items={[
        {
        //   key: '1',
          label: [image1],
          children: [content],
          showArrow: false,
          size:'large',
          lineWidth : 100000
        },
      ]}
      
    />
    </div>
    <div className='col12 lable mt-2'>
    <Collapse 
    
      items={[
        {
        //   key: '1',
          label: [image2],
          children: [content1],
          showArrow: false,
          size:'large',
          lineWidth : 100000
        },
      ]}
      
    />
    </div>
  </>
  
);
export default Collapse1;