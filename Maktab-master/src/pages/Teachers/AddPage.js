import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import dataTeachers from "../../data/teachers";
import Teachers from "../Teachers";
const AddPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [salary, setSalary] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const user = {
      firstName: firstName,
      lastName: lastName,
      subject: subject,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      salary: salary,
    };
    console.log(user);
    const dataTeach = dataTeachers.push(user);
    Teachers(dataTeach);
  };

  return (
    <form onSubmit={submit}>
      <div className="row mb-4">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Ism"
              variant="outlined"
              className="w-100"
              value={firstName}
              required
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Familiya"
              type="text"
              variant="outlined"
              className="w-100"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              type="text"
              label="Fani"
              variant="outlined"
              className="w-100"
              value={subject}
              //   onChange={(e) => changeField(e.target.value, "name", setName)}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              type="number"
              label="Telefon raqami"
              variant="outlined"
              className="w-100"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Tug'ulgan sanasi"
              variant="outlined"
              type="date"
              className="w-100"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Maoshi"
              variant="outlined"
              type="number"
              className="w-100"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button variant="outlined" type="submit">
        <FontAwesomeIcon icon={faPlus} className="me-2" /> Qo'shish
      </Button>
    </form>
  );
};

export default AddPage;
