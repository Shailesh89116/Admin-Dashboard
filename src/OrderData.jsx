export const orderColumns = [
    { field: "id", headerName: "Order ID", width: 150 },
    {
      field: "product",
      headerName: "product",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.product}
          </div>
        )
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
    },
    {
      field: "amount",
      headerName : "Amount",
      width : 100
    },
    {
      field: "delivered",
      headerName: "Delivery Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithDeliveryStatus ${params.row.delivered}`}>
            {params.row.delivered}
          </div>
        );
      },
    },
    {
        field: "payment",
        headerName: "Payment Status",
        width: 160,
        renderCell: (params) => {
          return (
            <div className={`cellWithPaymentStatus ${params.row.payment}`}>
              {params.row.payment}
            </div>
          );
        },
      },
  ];

  export const orderRows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"1",
      amount: 785,
      delivered: "Delivered",
      payment : "Paid"
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"2",
      amount: 900,
      delivered: "Not_Delivered",
      payment : "Paid"

    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"1",
      amount: 150,
      delivered: "Not Delivered",
      payment : "Not_Paid"
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"0",
      amount: 125,
      delivered: "Not Delivered",
      payment : "Not_Paid"
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"64",
      amount: 450,
      delivered: "Not Delivered",
      payment : "Not_Paid"
    },
  ];

 