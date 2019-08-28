import axios from "axios";
import qs from "qs";

async function handleSubmit(
  event,
  regions,
  setRegions,
  domainInfo,
  setDisabled
) {
  event.preventDefault();

  regions.forEach(async ({ id }) => {
    setRegions(currentRegions =>
      currentRegions.map(region => {
        if (region.id === id) {
          return {
            ...region,
            loading: true,
            error: "",
            data: []
          };
        }

        return region;
      })
    );

    try {
      const response = await axios({
        url: `https://${id}-dnscheck.now.sh`,
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify({
          domain: domainInfo.domain,
          dns_server: domainInfo.dnsServer
        })
      });

      setDisabled(false);

      if (response.status === 200) {
        setRegions(currentRegions =>
          currentRegions.map(region => {
            if (region.id === id) {
              return {
                ...region,
                loading: false,
                data: response.data.data
              };
            }

            return region;
          })
        );
      }
    } catch (err) {
      setDisabled(false);
      console.log("err!", err);

      if (err.response) {
        setRegions(currentRegions =>
          currentRegions.map(region => {
            if (region.id === id) {
              return {
                ...region,
                loading: false,
                error: err.response.data.message
              };
            }

            return region;
          })
        );
      } else {
        console.error(err);
      }
    }
  });
}

export { handleSubmit };
