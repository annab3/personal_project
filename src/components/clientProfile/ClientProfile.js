import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editClient, editPets } from "../../ducks/authReducer";

class ClientProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit_client: false,
      first_name: this.props.client.first_name,
      last_name: this.props.client.last_name,
      primary_phone: this.props.client.primary_number,
      secondary_phone: this.props.client.secondary_number,
      address: this.props.client.address,
      city: this.props.client.city,
      state: this.props.client.state,
      zip: this.props.client.zip,
      edit_pet: {}
    };
  }
  clickHandlerCancelUserEdit() {
    this.setState({
      edit_client: false,
      first_name: this.props.client.first_name,
      last_name: this.props.client.last_name,
      primary_phone: this.props.client.primary_phone,
      secondary_phone: this.props.client.secondary_phone,
      address: this.props.client.address,
      city: this.props.client.city,
      state: this.props.client.state,
      zip: this.props.client.zip
    });
  }
  clickHandlerSubmitUserEdit() {
    const {
      first_name,
      last_name,
      primary_phone,
      secondary_phone,
      address,
      city,
      state,
      zip
    } = this.state;
    this.props.editClient(
      first_name,
      last_name,
      primary_phone,
      secondary_phone,
      address,
      city,
      state,
      zip
    );
    this.setState({
      edit_client: false,
      first_name: this.props.client.first_name,
      last_name: this.props.client.last_name,
      primary_phone: this.props.client.primary_phone,
      secondary_phone: this.props.client.secondary_phone,
      address: this.props.client.address,
      city: this.props.client.city,
      state: this.props.client.state,
      zip: this.props.client.zip
    });
  }
  clickHandlerCancelPetEdit() {
    this.setState({ edit_pet: {} });
  }
  clickHandlerSubmitPetEdit() {
    this.props.editPets(this.state.edit_pet);
    this.setState({ edit_pet: {} });
  }
  render() {
    return (
      <div>
        <div>
          {!this.state.edit_client ? (
            <div>
              <h5>
                Name: {this.props.client.first_name}{" "}
                {this.props.client.last_name}
              </h5>
              <h5>Primary Phone#: {this.props.client.primary_number}</h5>
              <h5>Secondary Phone#: {this.props.client.secondary_number}</h5>
              <h5>Adress: {this.props.client.address}</h5>
              <h5>City: {this.props.client.city}</h5>
              <h5>State: {this.props.client.state}</h5>
              <h5>Zipcode: {this.props.client.zip}</h5>
              <button onClick={() => this.setState({ edit_client: true })}>
                Edit
              </button>
            </div>
          ) : (
            <div>
              <h5>
                Name:
                <input
                  placeholder={this.props.client.first_name}
                  onChange={e => this.setState({ first_name: e.target.value })}
                />
                <input
                  placeholder={this.props.client.last_name}
                  onChange={e => this.setState({ last_name: e.target.value })}
                />
              </h5>
              <h5>
                Primary Phone#:
                <input
                  placeholder={this.props.client.primary_number}
                  onChange={e =>
                    this.setState({ primary_phone: e.target.value })
                  }
                />
              </h5>
              <h5>
                Secondary Phone#:{" "}
                <input
                  placeholder={this.props.client.secondary_number}
                  onChange={e =>
                    this.setState({ secondary_phone: e.target.value })
                  }
                />
              </h5>
              <h5>
                Adress:{" "}
                <input
                  placeholder={this.props.client.address}
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </h5>
              <h5>
                City:{" "}
                <input
                  placeholder={this.props.client.city}
                  onChange={e => this.setState({ city: e.target.value })}
                />
              </h5>
              <h5>
                State:{" "}
                <input
                  placeholder={this.props.client.state}
                  onChange={e => this.setState({ state: e.target.value })}
                />
              </h5>
              <h5>
                Zipcode:{" "}
                <input
                  placeholder={this.props.client.zip}
                  onChange={e => this.setState({ zip: e.target.value })}
                />
              </h5>
              <div>
                <button onClick={() => this.clickHandlerCancelUserEdit()}>
                  cancel
                </button>
                <button onClick={() => this.clickHandlerSubmitUserEdit()}>
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          pets
          {this.props.pets.map((pet, index) => {
            if (
              this.state.edit_pet.dog_id &&
              this.state.edit_pet.dog_id === pet.dog_id
            ) {
              return (
                <div key={index}>
                  <h5>
                    Picture:{" "}
                    <input
                      placeholder={pet.picture}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            picture: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Name:{" "}
                    <input
                      placeholder={pet.name}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            name: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Breed:{" "}
                    <input
                      placeholder={pet.breed}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            breed: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Birthday:{" "}
                    <input
                      placeholder={pet.birthday}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            birthday: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    Weight:{" "}
                    <input
                      placeholder={pet.weight}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            weight: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    color:{" "}
                    <input
                      placeholder={pet.color}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            color: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <h5>
                    feeding:{" "}
                    <input
                      placeholder={pet.feeding}
                      onChange={e =>
                        this.setState({
                          edit_pet: {
                            ...this.state.edit_pet,
                            feeding: e.target.value
                          }
                        })
                      }
                    />
                  </h5>
                  <div>
                    <button onClick={() => this.clickHandlerCancelPetEdit()}>
                      Cancel
                    </button>
                    <button onClick={() => this.clickHandlerSubmitPetEdit()}>
                      Submit
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  {pet.picture ? (
                    <img src={pet.picture} alt={pet.name} />
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
                      alt="nothing provided"
                    />
                  )}
                  <h5>Name: {pet.name}</h5>
                  <h5>Breed: {pet.breed}</h5>
                  <h5>Birthday: {pet.birthday}</h5>
                  <h5>Weight: {pet.weight}</h5>
                  <h5>color: {pet.color}</h5>
                  <h5>feeding: {pet.feeding}</h5>
                  <button onClick={() => this.setState({ edit_pet: pet })}>
                    Edit
                  </button>
                </div>
              );
            }
          })}
          {/* map function over array of pets */}
          <Link to="/portal/add_dog">
            <button>Add Pet</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    client: state.authReducer.client,
    pets: state.authReducer.pets
  };
}

export default connect(
  mapStateToProps,
  { editClient, editPets }
)(ClientProfile);
