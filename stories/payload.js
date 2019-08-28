export default {
  data: [
    { dns_server: "8.8.8.8" },
    { record: "A", value: "18.136.236.228" },
    { record: "A", value: "18.138.24.53" },
    { record: "NS", value: "b.zeit-world.org." },
    { record: "NS", value: "e.zeit-world.net." },
    { record: "NS", value: "f.zeit-world.com." },
    { record: "NS", value: "a.zeit-world.co.uk." },
    {
      record: "SOA",
      value:
        "ns11.constellix.com. dns.constellix.com. 2015010234 43200 3600 1209600 180"
    },
    { record: "MX", value: "10 aspmx1.migadu.com." },
    { record: "MX", value: "20 aspmx2.migadu.com." },
    { record: "TXT", value: '"v=spf1 a mx include:spf.migadu.com ~all"' },
    { record: "CAA", value: '0 issue "letsencrypt.org"' }
  ]
};
