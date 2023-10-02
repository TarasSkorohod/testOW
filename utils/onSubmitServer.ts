const URL_SERVER = "http://localhost:4000/";

export const onSubmitServer = async (data: any): Promise<any> => {
  const formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("phone", data.phone);
  formData.append("email", data.email);
  formData.append("comment", data.comment);
  formData.append("year", data.year);
  formData.append("make", data.make);
  formData.append("model", data.model);
  formData.append("licensePlate", data.licensePlate);
  formData.append("state", data.state);
  data.services.forEach((service: string) => formData.append("services", service));

  Object.values(data.file).forEach((f, i) => {
    formData.append(`file`, data.file[i]);
  });

  fetch(`${URL_SERVER}api/form`, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      return e;
    });
};
