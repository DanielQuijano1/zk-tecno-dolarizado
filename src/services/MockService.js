const productos = [
    { id: 2, title: "Cable USB", precio: "1.7", detalle: "Cable USB STARK TIPO C", img: "/imagenes/cable usb STARK type C.jpg", stock: 20, category: "Cables" },
    { id: 3, title: "Cargador Royal V8 4.8v", precio: "2", detalle: "Cargador Royalcell", img: "./imagenes/", stock: 5, category: "Cargadores" },
    { id: 5, title: "Adaptador HDMI", precio: "3", detalle: "Adaptador HDMI a VGA", img: "/imagenes/adaptador hdmi a vga.jpg", stock: 1, category: "Adaptadores" },
    { id: 6, title: "Cable AUX", precio: "0.5", detalle: "Cable AUX 2Mts", img: "/imagenes/cable auxiliar.jpg", stock: 10, category: "Cables" },
    { id: 7, title: "Cable HDMI", precio: "1.25", detalle: "Cable HDMI a V8", img: "/imagenes/hdmi a v8.jpg", stock: 2, category: "Cables" },
    { id: 8, title: "Cable Impresora", precio: "1", detalle: "Cable para Impresora 1.5Mts", img: "/imagenes/cable impresora.jpg", stock: 2, category: "Cables" },
    { id: 9, title: "Cable rca", precio: "1", detalle: "Cable RCA 3 a 3 1.5Mts", img: "/imagenes/cable rca 3 a 3.png", stock: 0, category: "Cables" },
    { id: 10, title: "Cable v3", precio: "0.6", detalle: "Cable V3 con Filtro", img: "/imagenes/cable v3 con filtro.png", stock: 5, category: "Cables" },
    { id: 11, title: "Cable HDMI", precio: "1.4", detalle: "Cable HMDI 1.5Mts mallado", img: "/imagenes/HDMI90.jpg", stock: 1, category: "Cables" },
    { id: 12, title: "cable vga", precio: "1.7", detalle: "Cable VGA c/Filtro 3Mts", img: "/imagenes/VGA3MTS.jpg", stock: 1, category: "Cables" },
    { id: 13, title: "cable vga", precio: "2.1", detalle: "Cable VGA c/Filtro 5Mts", img: "/imagenes/VGA.jpg", stock: 1, category: "Cables" },
    { id: 14, title: "OTG tipo C", precio: "0.5", detalle: "Adaptador OTG Tipo-C", img: "/imagenes/OTG tipo C.jpg", stock: 5, category: "Adaptadores" },
    { id: 15, title: "Parlantes", precio: "4.8", detalle: "Mini Parlantes para PC USB NOGA", img: "/imagenes/parlantes pc.jpg", stock: 2, category: "Accesorios PC" },
    { id: 16, title: "Cables AUX", precio: "1.2", detalle: "Cable Adaptador Auricular", img: "/imagenes/CB1A2.jpg", stock: 5, category: "Cables" },
    { id: 17, title: "Cable RCA", precio: "0.5", detalle: "Cable Aux a RCA s/bolsita", img: "/imagenes/X_cableaudiorca-aux1-8multra7624.png", stock: 5, category: "Cables" },
    { id: 18, title: "Cable internet", precio: "1.15", detalle: "Cable de RED 20Mts", img: "/imagenes/cable internet.jpg", stock: 2, category: "Cables" },
    { id: 19, title: "Adaptador AUX", precio: "", detalle: "Cable Jack 3.5mm a USB-C", img: "/imagenes/adaptador-tipo-c-a-aux-jack-3.5-chip-motorola-samsung-huawei.jpg", stock: 5, category: "Adaptadores" },
    { id: 20, title: "Cable PS2", precio: "1.1", detalle: "Cable PS2 VIDEO", img: "/imagenes/cable ps2.jpg", stock: 2, category: "Cables" },
    { id: 22, title: "cargador inalambrico", precio: "5.45", detalle: "Cargador Inalambrico NOGA 5W", img: "/imagenes/NG-Q04.jpg", stock: 1, category: "Cargadores" },
    { id: 24, title: "cargador notebook", precio: "7.3", detalle: "Cargador Notebook Universal TIME", img: "/imagenes/TMCN901.jpg", stock: 1, category: "Cargadores" },
    { id: 25, title: "Adaptador AUX", precio: "1", detalle: "Adaptador Auxiliar 3.5mm hembra a audio y microfono ", img: "/imagenes/adaptador audio a 3.5mm.jpg", stock: 5, category: "Cables" },
    { id: 26, title: "OTG Tipo V8", precio: "0.4", detalle: "Adaptador OTG tipo V8", img: "/imagenes/otg v8.jpg", stock: 5, category: "Adaptador" },
    { id: 27, title: "Antena WIFI", precio: "3.1", detalle: "Antena WIFI p/PC", img: "/imagenes/usb wireless 802IN.jpg", stock: 2, category: "Accesorios PC" },
    { id: 28, title: "Foco LED Simple", precio: "1", detalle: "Foco Led Simple", img: "/imagenes/lampara led 1.jpg", stock: 2, category: "OTROS" },
    { id: 29, title: "Foco LED Doble", precio: "2.5", detalle: "Foco Led Doble", img: "/imagenes/lampara led doble.jpg", stock: 1, category: "OTROS" },
    { id: 33, title: "Mousepad 3d", precio: "5", detalle: "MousePad con Almohadilla de Gel", img: "/imagenes/MOUSEPAD3D.jpg", stock: 2, category: "Accesorios PC" },
    { id: 34, title: "Palo Selfie", precio: "", detalle: "Palo Selfie c/Cable Aux", img: "/imagenes/selfie stick.jpg", stock: 1, category: "Accesorios Celulares" },
    { id: 35, title: "Pendrive", precio: "", detalle: "Pendrive Sandisk 32BG", img: "/imagenes/pendrive 16gb sandisk.jpg", stock: 2, category: "OTROS" },
    { id: 36, title: "Placa Audio USB", precio: "1.35", detalle: "Placa de Audio USB a Jack 3.5mm", img: "/imagenes/placa de sonido usb.jpg", stock: 2, category: "Accesorios PC" },
    { id: 37, title: "Receptor Bluetooth", precio: "1.3", detalle: "Receptor Bluetooth SUONO", img: "/imagenes/bluetooth 3.5mm.jpg", stock: 2, category: "OTROS" },
    { id: 38, title: "teclado comun", precio: "3.6", detalle: "Teclado PC común NOGA", img: "/imagenes/NKB78011.jpg", stock: 2, category: "Accesorios PC" },
    { id: 39, title: "Tira led", precio: "4.20", detalle: "Tira LED 28x35 Para Interiores", img: "/imagenes/tira led 28x35.jpg", stock: 1, category: "OTROS" },
    { id: 40, title: "Tira Led", precio: "7.4", detalle: "Tira LED 50x50 Para Interiores", img: "/imagenes/tira led 50 x 50.jpg", stock: 1, category: "OTROS" },
    { id: 43, title: "Teclado + Mouse comun", precio: "6.20", detalle: "Teclado + Mouse", img: "/imagenes/8254.jpg", stock: 1, category: "Accesorios PC" },
    { id: 44, title: "HUB usb 4 en 1", precio: "1.4", detalle: "Adaptador HUB 4 USB ", img: "/imagenes/10445.jpg", stock: 1, category: "Accesorios PC" },
    { id: 45, title: "Cargador para Auto", precio: "2.6", detalle: "Cargador KOSMO 3.3A para Auto con 3 USB", img: "/imagenes/cargador auto kosmo.jpg", stock: 1, category: "Cargadores" },
    { id: 46, title: "cable auxiliar", precio: "0.7", detalle: "Cable Auxiliar Macho-Hembra 1.5M", img: "/imagenes/10460.jpg", stock: 5, category: "Cables" },
    { id: 47, title: "Cable sata", precio: "0.6", detalle: "Cable SATA", img: "/imagenes/cable sata.jpg", stock: 5, category: "Cables" },
    { id: 48, title: "HDMI TV", precio: "2", detalle: "Cable HDMI tv 3 en 1", img: "/imagenes/hdmi 3 en 1.jpg", stock: 1, category: "Cables" },
    { id: 49, title: "Chip", precio: "", detalle: "Chips Personal, Claro, Tuenti", img: "/imagenes/chip.jpg", stock: 100, category: "Accesorios Celulares" },
    { id: 50, title: "MousePad", precio: "1.3", detalle: "Mousepad Rojo Netmak", img: "./imagenes/", stock: 2, category: "Accesorios PC" },
    { id: 51, title: "Parlante", precio: "10.7", detalle: "Parlante", img: "./imagenes/", stock: 1, category: "OTROS" },
    { id: 52, title: "Ring Celular", precio: "0.5", detalle: "Ring Anillo", img: "./imagenes/", stock: 10, category: "Accesorios Celulares" },
    { id: 53, title: "Cable USB", precio: "1.5", detalle: "Cable USB STARK TIPO V8 / micro USB", img: "/imagenes/cable usb STARK type C.jpg", stock: 20, category: "Cables" },
    { id: 54, title: "Adaptador tipo C", precio: "0.4", detalle: "Adaptador Auricular Tipo C", img: "", stock: 20, category: "Cables" },
    { id: 55, title: "Joystick NETMAK 6 en 1", precio: "15.8", detalle: "Joystick para celular / pc / ps3 / ps4 / switch", img: "./imagenes/", stock: 1, category: "OTROS" },
    { id: 56, title: "Cable Power 220v", precio: "2.4", detalle: "Cable Power 220v NETMAK 1.5mt NM-C45", img: "./imagenes/", stock: 5, category: "Cables" },
    { id: 57, title: "Cable tipo 8", precio: "1.5", detalle: "Cable Power tipo 8 NETMAK 1.5mt", img: "./imagenes/", stock: 5, category: "Cables" },
    { id: 58, title: "Cable Red 30Mts", precio: "4", detalle: "Cable de Red 30mts JXD", img: "./imagenes/", stock: 1, category: "Accesorios PC" },
    { id: 59, title: "Auriculares SOMOSTEC", precio: "0.8", detalle: "Auriculares CAble sin manos libres SOMOSTEC ST-1", img: "./imagenes/", stock: 10, category: "Auriculares" },
    { id: 60, title: "MicroSD KINGSTONE 64GB", precio: "5.5", detalle: "Memoria MicroSD U1 KINGSTONE 64GB", img: "./imagenes/", stock: 2, category: "Accesorios Celulares" },
    { id: 61, title: "MicroSD KINGSTONE 32GB", precio: "5", detalle: "Memoria MicroSD U1 KINGSTONE 32GB", img: "./imagenes/", stock: 2, category: "Accesorios Celulares" },
    { id: 62, title: "Mouse Gamer KOSMO M3", precio: "4.2", detalle: "Mouse Gamer KOSMO M3", img: "./imagenes/", stock: 1, category: "Accesorios PC" },
    { id: 63, title: "Mouse INOVA ", precio: "2.3", detalle: "Mouse INOVA con cable retractil", img: "./imagenes/", stock: 2, category: "Accesorios PC" },
    { id: 64, title: "Mouse WEIBO", precio: "2.1", detalle: "Mouse WEIBO Inalambrico", img: "./imagenes/", stock: 2, category: "Accesorios PC" },
    { id: 65, title: "Porta SUBE RINGO", precio: "0.45", detalle: "Porta SUBE RINGO", img: "./imagenes/", stock: 10, category: "OTROS" },
    { id: 66, title: "Joystick 5 en 1 NETMAK", precio: "22", detalle: "Joystick para celulares / pc / switch / ps2 / ps3 ", img: "./imagenes/", stock: 1, category: "OTROS" },
    { id: 67, title: "Cable USB Economico", precio: "0.6", detalle: "Cable USB Economico", img: "./imagenes/", stock: 10, category: "Cables" },
]

/*
{ id: , title: "", precio: "", detalle: "", img: "./imagenes/", stock: 0, category: "" },
*/




const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
}


const obtenerProducto = (idProducto) => {
    return new Promise((resolve, reject) => {
        let itemRequerido = productos.find((item) => { return (item.id === Number(idProducto)) })
        setTimeout(() => {
            if (itemRequerido) resolve(itemRequerido);
            else  reject("No se encontró el producto buscado")
        }, 200);
    });
}

const obtenerProductoPorCategoria = ( categoriaURL) => {
    return new Promise((resolve, reject) => {
        let productoRequerido = productos.filter(producto => producto.category === categoriaURL);
        console.log(categoriaURL)
        setTimeout(() => {
            if (productoRequerido) resolve(productoRequerido);
            else  reject("No se encontró el producto buscado")
        }, 1000);
    });
}



export default obtenerProductos;

export { obtenerProductos, obtenerProducto , obtenerProductoPorCategoria };
