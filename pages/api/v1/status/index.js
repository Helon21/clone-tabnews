function status(request, response) {
    response.status(200).json({ name: "Kelly" });
}

export default status;