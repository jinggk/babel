const fun = async () => {
    const data = await Promise.resolve(123);
    console.log(data);
};

fun();
