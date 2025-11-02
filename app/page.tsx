"use client";

import { useRouter } from "next/navigation";  
import { useState } from "react";

export default function Home() {
  const router = useRouter()
  const initial ={
    date: "",
    age: 0,
    succes: false,
    name:""
  }
  const [formData, setFormData] = useState(initial);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);

    if (formData.date == "" || formData.date != "2003-10-31") {
      alert("kat I can't beleive that you forget our bday......");
      return;
    }

    if (formData.age == 0 || formData.age != 22) {
      alert(
        "kat I can't beleive that you forget our age????????????? IT'S freaking 22 you AUNTYYYYY"
      );
      return;
    }

    setFormData({
      ...formData,
      succes: true,
    });
  };

  const handleName =(e:any)=>{
    e.preventDefault();
    console.log(formData);

    if (formData.name == "" || formData.name.toLowerCase() !="bal" ) {
      alert("i'm disappointed that you... don't even remember what you cal me kat..... bye :'(");
      return
    }
    router.push("/cal")
  }

  return (
    <form method="post">
      {formData.succes ? (
        <div>
          <div>
            <h3>Now for your suprise</h3>
            <label>Enter the name you always call me:</label>
            <input
              type="text"
              name="name"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <button onClick={handleName}>Submit</button>
        </div>
      ) : (
        <div>
          <div>
            <label>Enter your Date of Birth:</label>
            <input
              type="date"
              name="date"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <div>
            <label>Enter your Age:</label>
            <input
              type="number"
              name="age"
              onChange={(event) => handleInputChange(event)}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </form>
  );
}
