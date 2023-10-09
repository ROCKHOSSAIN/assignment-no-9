

const BookMarks = ({ detail }) => {
    const { id, image, title, description } = detail

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='md:h-[250px] md:w-[300px] relative' src={image} alt="Shoes" /></figure>
                <div className="flex justify-end absolute right- md:right-10 top-72 md:top-0 "> </div>
                <div className="card-body mt-10">
                    {
                        description.length > 200 ? <p>{description.slice(0, 200)}
                        </p>
                            :
                            <p>{description}</p>
                    }



                </div>
            </div>
        </div>
    );
};

export default BookMarks;