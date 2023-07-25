
const page = ({params}:any) => {
    return (
        <div>
            <h3>this is a dynamic page with id :{params.id}</h3>
        </div>
    );
};

export default page;