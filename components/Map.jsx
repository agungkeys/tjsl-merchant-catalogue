function Map() {
  return (
    <div class="mapouter">
      <div class="gmap_canvas" width="100%">
        <iframe
          width="1024"
          height="200"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Jl.%20James%20Simandjuntak%20No.%201%20Bontang%2075313%20Kalimantan%20Timur,%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
