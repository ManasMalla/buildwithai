export default function Gallery() {
  return (
    <div className="photos_grid">
      <img
        crossOrigin="anonymous"
        className="grid_item object-top"
        data-src="highlights/gdsc-g-web.jpg"
        src="highlights/gdsc-g-web.jpg"
        alt="Web Study Jams at GITAM University"
      />
      <img
        crossOrigin="anonymous"
        className="grid_item"
        data-src="highlights/gdsc-gvp.png"
        src="highlights/gdsc-gvp.png"
        alt="Hacktober Fest at GVP"
      />
      <img
        crossOrigin="anonymous"
        className="grid_item"
        data-src="/highlights/gdsc_iwd_3.jpg"
        src="/highlights/gdsc_iwd_3.jpg"
      />
      {/* <img
        crossOrigin="anonymous"
        className="grid_item object-right"
        data-src="/highlights/gdsc_iwd_2.png"
        src="/highlights/gdsc_iwd_2.png"
      /> */}
      <img
        crossOrigin="anonymous"
        className="grid_item"
        data-src="/highlights/gdsc_vignan_2.jpeg"
        src="/highlights/gdsc_vignan_2.jpeg"
      />
      <img
        crossOrigin="anonymous"
        className="grid_item"
        data-src="/highlights/gdsc-g-web-sj.png"
        src="/highlights/gdsc-g-web-sj.png"
      />
      <img
        crossOrigin="anonymous"
        className="grid_item"
        data-src="/highlights/gdsc_gpcet_2.jpeg"
        src="/highlights/gdsc_gpcet_2.jpeg"
      />
      <img
        crossOrigin="anonymous"
        className="grid_item"
        data-src="/highlights/gdsc_gpcet.jpeg"
        src="/highlights/gdsc_gpcet.jpeg"
      />
      <img
        crossOrigin="anonymous"
        className="grid_item"
        data-src="highlights/gdsc-mvgr.jpeg"
        src="highlights/gdsc-mvgr.jpeg"
        alt="Cloud Study Jams participants wearing their swags at MVGR"
      />
      <div className="gallery_info">
        <div>
          <h2>DSC Andhra Pradesh '24 highlights</h2>
          <p>
            This year's student clubs built lots of excitement. Check out photos
            from featured talks, hands-on learning sessions, and after-hours
            fun.
          </p>
        </div>
        <a
          href="https://photos.app.goo.gl/9HPAL3Tkv3vKmYrh7"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all photos
        </a>
      </div>
    </div>
  );
}
