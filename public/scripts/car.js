class Car extends Component {
  constructor(props) {
    super();
    const {
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
      availableAt,
    } = props;
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="col-md-6 col-lg-4 mb-3">
        <div class="card" style="border: 1px solid #d6d6d6e3">
          <img
            src="${this.image}"
            class="card-img-top card-img-car"
            alt="car"
            style="object-fit: fill; width: 100%; height: 200px;"
          />
          <div class="card-body p-2">
            <h5 style="font-size: 18px;">${this.manufacture} ${this.model}/${this.type}</h5>
            <h5 class="card-title fw-bold">Rp ${this.rentPerDay} / hari</h5>
            <p class="card-text body-14-light" style="min-height: 96px">
              ${this.description}
            </p>
          </div>
          <ul
            class="list-group list-group-flush border-0 body-14-light px-2"
          >
            <li class="list-group-item border-0 px-0">
              <img src="./images/svg/fi_users.svg" class="me-2" alt="" />${this.capacity}
              Orang
            </li>
            <li class="list-group-item border-0 px-0">
              <img
                src="./images/svg/Vector.svg"
                class="me-2"
                alt=""
              />${this.transmission}
            </li>
            <li class="list-group-item border-0 px-0">
              <img
                src="./images/svg/fi_calendar.svg"
                class="me-2"
                alt=""
              />Tahun ${this.year}
            </li>
          </ul>
          <div class="p-2">
            <button
              class="btn btn-success btn-lg d-block w-100 body-14-bold border-0"
            >
              Pilih Mobil
            </button>
          </div>
        </div>
      </div>`;
  }
}
