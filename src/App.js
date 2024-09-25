
import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import withAuthorization from './WithAuthorizationHoc';
import ToggleComponent from './components/ToggleModalComponent/ToggleComponent';
import Modal from './components/ToggleModalComponent/ModalComponent';
import Form from './components/DynamicFormComponent/FormComponent'
 import UserList from './components/FetchDataHoc/UserList';
 import WithDataFetch from './components/FetchDataHoc/withDataFetching';
import MouseMoveDisplay from './components/MouseTrackerComponent/DisplayMouseMove';
import ShopingCart from './components/ShoppingCardComponent/ShopingCart';
import CartItem from './components/ShoppingCardComponent/CartItem';

const AuthorisedDashboard = withAuthorization(Dashboard, 'admin');

const url= 'https://jsonplaceholder.typicode.com/users';

 const UserListWithData = WithDataFetch(UserList, url);

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

const user ={
  name: 'Rahul',
  role:'admin',
};

 const handleOnClick = () =>{
  setIsAuthenticated((isAuthenticated) => !isAuthenticated);
 }

 const fields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    label: 'Gender',
    name: 'gender',
    type: 'select',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
  },
];

// task no. 6

const [cartItems, setCartItems] = useState([
  {id:1, name:'Mobile', price:25000},
  {id:2, name:'Laptop', price:60000},
  {id:3, name:'Tablet', price:20000}
]);

const removeItem = (id) => {
setCartItems(cartItems.filter(item => item.id !== id));
};


  return (
    <div>
    <div>
      <AuthorisedDashboard isAuthenticated={isAuthenticated} role={user.role} user={user}/>
      <button onClick={handleOnClick}>{isAuthenticated ? 'Log out' : 'Log In'}</button>
    </div>
    <div>
      <br></br>
    <ToggleComponent render={({ isOpen, toggle }) => (
        <div>
          <button onClick={toggle}>
            {isOpen ? 'Close Modal' : 'Open Modal'}
          </button>
          <Modal isOpen={isOpen}>
            <h1>Modal Content</h1>
            <p>This is some content inside the modal.</p>
            <button onClick={toggle}>Close</button>
          </Modal>
        </div>
      )} />
    </div>

<br></br>
    <div>
      <Form title="User Information" fields={fields}>
        <button type="submit">Submit</button>
      </Form>
    </div>

    <div>
      <UserListWithData />
    </div>
    <br/>
    <div>
      <MouseMoveDisplay/>
    </div>
    <hr/>
    {/* taskno 6 */}
    <div>
      <ShopingCart title='Shopping Cart'>
        {cartItems.map(item => (
          <CartItem 
          key={item.id}
          name={item.name}
          price={item.price}
          onRemove={() => removeItem(item.id)}
          />
        ))}
      </ShopingCart>
    </div>
    </div>
  );
};

export default App;
