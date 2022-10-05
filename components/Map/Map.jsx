function Map() {
  return (
    <div className="mapOuter">
      <div className="gmapCanvas" width="100%">
        <iframe
          width="1024"
          height="200"
          id="gmapCanvas"
          src="https://maps.google.com/maps?q=Jl.%20James%20Simandjuntak%20No.%201%20Bontang%2075313%20Kalimantan%20Timur,%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
