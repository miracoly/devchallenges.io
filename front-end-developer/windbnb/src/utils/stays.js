class Stays extends Array {
  filterByLocation(location) {
    const result = new Stays(
      ...this.filter(
        (stay) =>
          stay.city.toLowerCase().includes(location.toLowerCase()) ||
          stay.country.toLowerCase().includes(location.toLowerCase())
      )
    );
    console.log("filterByLocation: ", result);
    return result;
  }

  filterByGuests(guests) {
    const result = new Stays(
      ...(guests
        ? this.filter((stay) => stay.beds >= guests || stay.beds === null)
        : this)
    );
    console.log("filterByGuests ", result);
    return result;
  }
}

export default Stays;
