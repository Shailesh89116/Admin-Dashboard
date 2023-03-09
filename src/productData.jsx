export const productColumns = [
    { field: "id", headerName: "ID", width: 150 },
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
      field: "description",
      headerName: "Description",
      width: 230,
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
      field: "stock",
      headerName: "Stock",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.stock}`}>
            {params.row.stock}
          </div>
        );
      },
    },
  ];

  export const productRows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"0",
      amount: 785,
      stock: "Stock_In",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"50",
      amount: 900,
      stock: "Stock_In",

    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"100",
      amount: 150,
      stock: "Stock_In",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"0",
      amount: 125,
      stock: "Sold_Out",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      description : "",
      quantity:"64",
      amount: 450,
      stock: "Stock_In",
    },
  ];

 