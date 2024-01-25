import Header from "../../reuseableComponents/header/header.component";
import Loader from "../../loader/loader.component";
import useLoading from "../../../hooks/useLoadingHook";
import { useGetGeographyQuery } from "../../../api/apiSlice";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../../../data/geoData";


const Geography: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const heading = "Geography";
  const subHeading = "Map showing geographical distribution of users";
  const { data, isLoading, isSuccess} = useGetGeographyQuery();
  const [internalLoading] = useLoading(isLoading, 2000);
  console.log(data);
  return (
    <div className="overflow-y-auto overflow-x-auto flex flex-col gap-5 h-[78vh] w-[90vw] p-[25px] bg-white rounded-3xl">
      <div>
        <Header heading={heading} subHeading={subHeading} />
      </div>
      {internalLoading ? (
        <div className="  flex justify-center items-center h-[78vh]">
          <Loader />
        </div>
      ) : (
        
          <ResponsiveChoropleth
            data={isSuccess ? data : {}}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: "#444444",
                  },
                },
                legend: {
                  text: {
                    fill: "#444444",
                  },
                },
                ticks: {
                  line: {
                    stroke: "#444444",
                    strokeWidth: 1,
                  },
                  text: {
                    fill: "#444444",
                  },
                },
              },
              legends: {
                text: {
                  fill: "#444444",
                },
              },
              tooltip: {
                container: {
                  color: "#444444",
                },
              },
            }}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="id"
            value="value"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            enableGraticule={true}
            // graticuleLineColor="#dddddd"
            borderWidth={1.3}
            borderColor="#fff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: "#444444",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000000",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        
      )}
    </div>
  );
};

export default Geography;
