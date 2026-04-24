"use client";

const Infographic = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-white">
      {/* Flourish Map Embed */}
      <div className="flourish-embed flourish-map">
        <iframe
          src="https://flo.uri.sh/visualisation/24003651/embed?auto=1"
          title="Interactive or visual content"
          style={{
            width: "100%",
            height: "1000px",
            margin: "auto",
            display: "block",
          }}
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        />
        <div className="flourish-credit text-right text-sm font-bold text-[#464646] font-helvetica p-1">
          <a
            href="https://flourish.studio/visualisations/maps/?utm_source=showcase&utm_campaign=visualisation/24003651"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 no-underline text-inherit"
          >
            <img
              src="https://public.flourish.studio/resources/bosh.svg"
              alt="Flourish logo"
              className="inline-block align-middle"
              width={16}
              height={16}
            />
            <span className="align-middle">A Flourish map</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
