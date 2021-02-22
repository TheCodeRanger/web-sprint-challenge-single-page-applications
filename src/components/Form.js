import React, {useState, useEffect} from 'react'
import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/Schema';

//Reference forms guided project --
const initialValues = {
    name: '',
    text: '',
    pizzaSize: '',
    sauce: false,
    cheese: false,
    nineBullets: false,
    xtraCheese: false,
    gravel: false,
    brokenGlass: false,
    pepperoni: false,
    garlic: false,
    cat: false,
    feta: false,
    olives: false,
    handOfGod: false,
    
}

const initialErrors = {
    name: '',
    text: '',
    pizzaSize: ''
}

//Reference advanced forms guided project
export  const Form = () => {
    const [orders, setOrders] = useState([])
    const [form, setForm] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(true)
    
const formSubmit = () => {
    const newPizza = {
        name: form.name.trim(),
        text:form.text.trim(),
        pizzaSize: form.pizzaSize,
        toppings: ['sauce', 'cheese', 'nineBullets','xtraCheese', 'gravel', 'brokenGlass', 'pepperoni', 'garlic', 'cat','feta', 'olives', 'handOfGod'].filter(item => form[item])
    }
    postNewOrder(newPizza)
};

const postNewOrder = newPizza => {
    axios
    .post('https://reqres.in/api/users', newPizza)
    .then(res => {
        setOrders([res.data, ...orders])
        setForm(initialValues)
    })
};

const inputChange = (name, value) => {
    yup
    .reach(schema,name)
    .validate(value)
    .then(() => {
        setFormErrors({
            ...formErrors,[name]: ''
        })
    })
    .catch((err) => {
        setFormErrors({
            ...formErrors,
            [name]: err.errors[0],
        })
    })
        setForm({...form, [name]: value})
    }
    
    useEffect(() => {
        schema.isValid(form).then((valid) => {
          setDisabled(!valid);
        });
      }, [form]);
  
      const onSubmit = e => {
        e.preventDefault()
        formSubmit()
    }

    const onChange = e => {
        const {name, value, type, checked} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }
    //Arnold audio file upon submit form - not working yet

    // const snd = new Audio()

    //Styling located in seperate folder
    //The HTML that shows up
    return (
        <div>
            <form onSubmit={onSubmit}>

            <div>
                <label>
                    Your Name: <input value={form.name} onChange={onChange} name='name' type='text' />
                    <span>{formErrors.name}</span>
                </label>          
            </div>
            
            <div>
                <label>
                Pizza Size: <select id='size' onChange={onChange} value={form.pizzaSize} name='pizzaSize'>
                                <option value=''>--Select a size--</option>
                                <option value='personal'>Personal</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                                <option value='huge'>HUGE</option>
                                <option value='ridiculous'>Ridiculous</option>
                                <option value=''>JUST STOP...</option>
                            </select>
                </label>
                <span>{formErrors.pizzaSize}</span>
            </div>

            <div className='ingredients' >
            <div>
                <label> Sauce
                    <input  type='checkbox' name='sauce'    checked={form.sauce}    onChange={onChange} />
                </label>
                <label> Cheese
                    <input  type='checkbox' name='cheese'    checked={form.cheese}    onChange={onChange} />
                </label>
                <label> 9MM Bullets
                    <input  type='checkbox' name='nineBullets'    checked={form.nineBullets}    onChange={onChange} />
                </label>
            </div>
            <div>
                <label> EXTRA Cheese... really?
                    <input  type='checkbox' name='xtraCheese'    checked={form.xtraCheese}    onChange={onChange} />
                </label>
                <label> Gravel
                    <input  type='checkbox' name='gravel'    checked={form.gravel}    onChange={onChange} />
                </label>
                <label> Broken Glass
                    <input  type='checkbox' name='brokenGlass'    checked={form.brokenGlass}    onChange={onChange} />
                </label>
            </div>
            <div>
                <label> Pepperoni
                    <input  type='checkbox' name='pepperoni'    checked={form.pepperoni}    onChange={onChange} />
                </label>
                <label> Garlic
                    <input  type='checkbox' name='garlic'    checked={form.garlic}    onChange={onChange} />
                </label>  
                <label> CAT!
                    <input  type='checkbox' name='cat'  checked={form.cat}  onChange={onChange} />
                </label>
            </div>
            <div>
                <label> Feta
                    <input  type='checkbox' name='feta'  checked={form.feta}  onChange={onChange} />
                </label>
                <label> Olives
                    <input  type='checkbox' name='olives'  checked={form.olives}  onChange={onChange} />
                </label>
                <label> HAND OF GOD
                    <input  type='checkbox' name='handOfGod'  checked={form.handOfGod}  onChange={onChange} />
                </label>
            </div>
        <div>
            <label>
                Additional Care:
                <input 
                value={form.text}
                onChange={onChange}
                name='text'
                type='text'
                />
            </label>
        </div>
            </div>

            <button id='submit-btn' disabled={disabled}>Order NOW! Id-iot</button>
            </form>

            <div>
                {orders.map(item => 
                 <div key={item.id}>
                    <h1>Name: {item.name}</h1>
                    <p>Special Instructions: {item.text}</p>
                    <p>Size: {item.pizzaSize}</p>
                    <p>Toppings: {item.toppings}</p>
                    <p>Order Date: {item.createdAt}</p>
                 </div>)}
            </div>
        </div>
    )
};

export default Form;