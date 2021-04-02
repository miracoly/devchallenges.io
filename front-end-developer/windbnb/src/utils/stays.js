class Stays extends Array {
  filterByLocation = (location) =>
    new Stays(
      ...this.filter(
        (stay) =>
          stay.city.toLowerCase().includes(location.toLowerCase()) ||
          stay.country.toLowerCase().includes(location.toLowerCase())
      )
    );

  filterByGuests = (guests) =>
    new Stays(
      ...(guests
        ? this.filter((stay) => stay.beds >= guests || stay.beds === null)
        : this)
    );
}

export default Stays;
