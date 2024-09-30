const serverData = [
  {
    serverAddress: "198.62.62.156",
    status: "UP",
    responseTime: 1.18,
    geoLocation: "US",
    vlessServers:
      "vless://69e97eae-093e-4303-866c-b5f12b3375fe@198.62.62.156:443?encryption=none&security=tls&sni=delicious.fruitpipers.dynv6.net&alpn=h3&fp=random&type=ws&host=delicious.fruitpipers.dynv6.net&path=%2F%3Fed%3D2560#US",
  },
  {
    serverAddress: "69.84.182.59",
    status: "UP",
    responseTime: 1.14,
    geoLocation: "US",
    vlessServers:
      "vless://a80305f9-f207-4fcd-9d67-a05112a2ebd1@69.84.182.59:443?encryption=none&security=tls&sni=hello.mushroomeater.dynv6.net&alpn=h3&fp=random&type=ws&host=hello.mushroomeater.dynv6.net&path=%2F%3Fproxyip%3Dproxyip.us.fxxk.dedyn.io#US",
  },
  // Add more server objects here...
];

const ServerLinkList = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Server List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serverData.map((server, index) => (
          <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              Server Address: {server.serverAddress}
            </h2>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  server.status === "UP" ? "text-green-600" : "text-red-600"
                }`}
              >
                {server.status}
              </span>
            </p>
            <p>
              <strong>Response Time:</strong> {server.responseTime} ms
            </p>
            <p>
              <strong>Location:</strong> {server.geoLocation}
            </p>
            <p className="text-sm mt-4 text-blue-600 break-words">
              <strong>VLESS Server:</strong> {server.vlessServers}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerLinkList;
