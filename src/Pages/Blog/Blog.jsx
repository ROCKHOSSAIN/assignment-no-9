import { IoBookmarks } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../Components/Navbar/Navbar";
// import { savebookmarks } from "../Favourite/localhost";
const Blog = ({ blog }) => {

    
    // const idInt = parseInt(id);
    // const bookmark=blog.find(bookmark=>bookmark.id===idInt)
    const { id, image, title, description } = blog
    const handleBookmark=()=>{
        const addbloglists=[]
        // savebookmarks(id)
    const allblogs = JSON.parse(localStorage.getItem('bookmarks'));
    if(!allblogs){
        addbloglists.push(blog);
        localStorage.setItem('bookmarks',JSON.stringify(addbloglists));

        toast("Has been bookmarked");
    }
    else{
        const isExist = allblogs.find((blog)=>blog.id===id)
        if(!isExist){
            addbloglists.push(...allblogs,blog)
            localStorage.setItem('bookmarks',JSON.stringify(addbloglists));
            toast("Has been bookmarked");
        }

    }
    
    }
    return (
        <div>

           
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className='md:h-[250px] md:w-[300px] relative' src={image} alt="Shoes" /></figure>
                        <div className="flex justify-end absolute right- md:right-10 top-72 md:top-0 "><IoBookmarks onClick={handleBookmark}></IoBookmarks></div>
                        <div className="card-body mt-10">
                            <h2 className="card-title">{title}</h2>
                            {
                                description.length>120?<p>{description.slice(0,120)}
                                <Link to={`/blog/${id}`}>
                                <div className="card-actions justify-end">
                                <button className="btn bg-gradient-to-br from-green-300 to-blue-500">Explore it!!</button>
                                </div>
                            </Link></p>
                            :
                            <p>{description}</p>
                            }
                            
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            
        </div>
    );
};

export default Blog;