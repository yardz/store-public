db.createUser(
    {
        user: "lab77",
        pwd: "lab77",
        roles: [
            {
                role: "readWrite",
                db: "dev-lab77"
            }
        ]
    }
);