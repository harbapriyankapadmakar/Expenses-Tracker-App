async function addUsers(event)
{


try {
    
    event.preventDefault();
    const amount=document.getElementById('expenseid').value;
    const description=document.getElementById('desid').value;
    const category=document.getElementById('listid').value;
    console.log(amount,description,category);
    const expense={
        amount:amount,description:description,category:category
    }

    console.log(expense);
    
    
    const res =await axios.post('http://localhost:3000/expense/add-expense',expense);
          
             console.log(res.data.newExpense);
             showUserOnScreen(res.data.newExpense);
             document.getElementById('expenseid').value='';
             document.getElementById('desid').value='';
             document.getElementById('listid').value='';
} catch (error) {
    document.body.innerHTML=document.body.innerHTML+'<h4>Something Went Wrong</h4>';
    console.log(error);
}

}

window.addEventListener('DOMContentLoaded',async ()=>{
   try {
     const res =await axios.get('http://localhost:3000/expense/get-expense');
     
     console.log(res.data.allExpenses[0]);

     for(let i=0;i<res.data.allExpenses.length;i++)
     {
        showUserOnScreen(res.data.allExpenses[i]);
        console.log('reached');

     }

   } catch (error) {
    document.body.innerHTML=document.body.innerHTML+'<h4>Something Went Wrong</h4>';
    console.log(error);
   }

})


function showUserOnScreen(user)
{
    let parentNode=document.getElementById('listofexpenses');


    const childNode=`<li id=${user.id}>${user.category}-${user.description}-${user.amount}
                        <button onclick=deleteUser('${user.id}')>Delete</button>
                        <button onclick=editUserDetail('${user.category}','${user.description}','${user.amount}','${user.id}')>Edit</button></li>`

    parentNode.innerHTML=parentNode.innerHTML+childNode;
}

async function deleteUser(userid)
{
  console.log('comes');

    try {
        await axios.delete(`http://localhost:3000/expense/delete-expense/${userid}`);
        console.log('axios');
        removeFromScreen(userid);
        console.log('complete');
    } catch (err) {
        document.body.innerHTML= document.body.innerHTML+"<h4>Something Went Wrong</h4>"
    console.log(err);
    }
       
         
} 
  




function removeFromScreen(id)
 {
     let parent=document.getElementById('listofexpenses');
    const childNodeDeleted=document.getElementById(id);

    parent.removeChild(childNodeDeleted)
}
