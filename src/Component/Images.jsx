function Images() {
  return (
    <div className="inline-flex gap-10">
      <img
        className="w-1/4 h-1/4 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        src="https://dejpknyizje2n.cloudfront.net/processing/raster/c65852b3154e442fa85d3a5405ee127a.png"
        alt="moon and stars"
      />
      <img
        className="w-1/4 h-1/4 animate-bounce animation-duration-2000"
        src="https://dejpknyizje2n.cloudfront.net/processing/raster/c65852b3154e442fa85d3a5405ee127a.png"
        alt="moon and stars"
      />
    </div>
  );
}

export default Images;
