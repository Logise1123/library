(function (ext) {
  ext._shutdown = function () {};
  ext._getStatus = function () {
    return { status: 2, msg: "Listo" };
  };

  // Función async en una extensión PenguinMod usando promesa
  ext.sha256 = async function (texto, callback) {
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto));
    const hex = [...new Uint8Array(hash)].map(x => x.toString(16).padStart(2, '0')).join('');
    callback(hex);
  };

  var descriptor = {
    blocks: [
      ["R", "SHA-256 de %s", "sha256", "texto"]
    ]
  };

  ScratchExtensions.register("SHA-256 Extensión", descriptor, ext);
})({});
