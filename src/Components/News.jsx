const News = () => {
    return (
      <div className="py-3 px-3 border-black border-2 solid rounded-3xl relative top-32">
        <div className="news h-52 rounded-3xl px-32 py-9 flex flex-col justify-center items-center gap-5">
          <h2 className="text-3xl font-bold">Ssubscribe to our chaNewsleteer</h2>
          <p className="text-gray-600">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex mx-4">
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="example@site.com"
              />
            </label>{" "}
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default News;