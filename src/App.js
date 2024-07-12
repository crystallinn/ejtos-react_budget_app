import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';


const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            // RemainingBudget component
                            <div className='col-sm'>
                                <RemainingBudget />
                            </div>                           
                        }        

                        {
                            // ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }     

                        {
                            // ExpenseList component
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>

                        }         

                        {
                            // ExpenseItem component
                            <div className='col-sm'>
                                <ExpenseItem />
                            </div>
                
                        }        

                        {
                            // AllocationForm component
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }  
                                                {
                            // Currency component
                            <div className='col-sm'>
                                <Currency />    
                            </div>   
                        }      

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
