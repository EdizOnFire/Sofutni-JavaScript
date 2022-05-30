export const dataIsValid = (data) => {
    const requiredFields = ["brand",
        "model",
        "description",
        "year",
        "imageUrl",
        "price"
    ];

    return requiredFields.some(x => !data[x])
}