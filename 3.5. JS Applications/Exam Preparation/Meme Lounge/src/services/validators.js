export const dataIsValid = (data) => {
    const requiredFields = ["title",
        "category",
        "maxLevel",
        "imageUrl",
        "summary"
    ];

    return requiredFields.some(x => !data[x])
}