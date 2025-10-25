import { toast } from "react-toastify";

const NewsLetter = () => {

    

    const handleSubscribe=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        // console.log(email);
        e.target.reset();
        if(email){
            toast.success(`Thanks for Subscribe ${email}`)
            
        }else{
            toast.info('Please enter a valid email')
        }
    }

    return (
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-2  justify-start items-center ' >
        <div className='text-center sm:text-left flex-1 py-2'>
           <h2 className=' font-bold text-2xl mb-2 '>Subscribe to our Newsletter</h2>
           <p className=' text-lg'> Get the latest game updates, new releases, and exclusive offers delivered straight to your inbox</p> 

        </div>
        <div >

           <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-3 justify-center sm:justify-end'>
            <input className='input input-bordered input-md w-full sm:w-80 text-black' type='email' name='email' placeholder='Enter your Email' required/>
            <button type='submit' className='btn-secondary btn w-full sm:w-auto'>Subscribe </button>
           </form>
        </div>
        </div>
    );
};

export default NewsLetter;