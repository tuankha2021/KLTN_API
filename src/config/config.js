import express from "express"

/**
 * 
 * @param {*} app express app
 */

const configView = (app) => {
    app.use(express.static('./src/public'));
    app.set("view engine", "jsx");
    app.set("views", "./src/views");
}

export default configView;