const table = (template) => {
    switch (template) {
        case template[0] === template[1] && template[1] === template[2] && typeof template[0] === "string":
            break;
        case template[3] === template[4] && template[4] === template[5] && typeof template[3] === "string":
            break;
        case template[6] === template[7] && template[7] === template[8] && typeof template[6] === "string":
            break;
        case template[0] === template[3] && template[3] === template[6] && typeof template[0] === "string":
            break;
        case template[1] === template[4] && template[4] === template[7] && typeof template[1] === "string":
            break;
        case template[2] === template[5] && template[5] === template[8] && typeof template[2] === "string":
            break;
        case template[0] === template[4] && template[4] === template[8] && typeof template[0] === "string":
            break;
        case template[2] === template[4] && template[4] === template[6] && typeof template[2] === "string":
            break;  
    }
}


export {table}