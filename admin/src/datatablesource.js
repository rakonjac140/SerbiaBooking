export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Korisnik",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Država",
    width: 100,
  },
  {
    field: "city",
    headerName: "Grad",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Telefon",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Ime",
    width: 150,
  },
  {
    field: "type",
    headerName: "Tip",
    width: 100,
  },
  {
    field: "title",
    headerName: "Naziv",
    width: 230,
  },
  {
    field: "city",
    headerName: "Grad",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Naziv",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Opis",
    width: 200,
  },
  {
    field: "price",
    headerName: "Cena",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Maksimalno ljudi",
    width: 200,
  },
];
