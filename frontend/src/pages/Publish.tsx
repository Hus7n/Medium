import { Appbar } from "../components/Appbar"

export const Publish = () => {
    return <div> 
               <Appbar/>
        <div className ="flex justify-center w-full pt-8">
        <div className ="max-w-screen-lg w-full">
<input type="text"  className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"/>
<TextEditor/>
<button type="submit" onClick={() => {
    
}} className=" mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 hover:bg-blue-800">
       Publish post
   </button>
    </div>
    </div>
    </div>
}
function TextEditor(){
return <div>
   <div className="w-full mb-4  ">
       <div className="w-full flex items-center justify-between border border-gray-200">
         
       <div className=" my-2 bg-white rounded-b-lg w-full">
           <label  className="sr-only">Publish post</label>
           <textarea  rows={8} className=" focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0" placeholder="Write an article..." required ></textarea>
       </div>
   </div>
  
   </div> 
</div>

}