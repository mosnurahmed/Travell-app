function DetailDescription({ d }) {
 
  return (
    <div className="">
      <h1 className="text-4xl font-bold py-3">{d.title} </h1>
      <p className="">
        {d.description}
      </p>
    </div>
  );
}

export default DetailDescription;
