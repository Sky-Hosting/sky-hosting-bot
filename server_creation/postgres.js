module.exports = (userID, serverName, location) => {

    let getPassword = () => {
        const CAPSNUM = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var password = "";
        while (password.length < 10) {
            password += CAPSNUM[Math.floor(Math.random() * CAPSNUM.length)];
        }
        return password;
    };

    return {
        "name": serverName,
        "user": userID,
        "nest": 5,
        "egg": 22,
        "docker_image": "quay.io/parkervcp/pterodactyl-images:db_postgres",
        "startup": "postgres  -D /home/container/postgres_db/",
        "limits": {
            "memory": 0,
            "swap": 0,
            "disk": 1024,
            "io": 500,
            "cpu": 0
        },
        "environment": {
            "PGPASSWORD": `${getPassword()}`,
            "PGROOT": `${getPassword()}`,
            "PGUSER": `admin`,
            "PGDATABASE": `pterodacty`
        },
        "feature_limits": {
            "databases": 0,
            "allocations": 0,
            "backups": 0
        },
        "deploy": {
            "locations": location,
            "dedicated_ip": false,
            "port_range": []
        },
        "start_on_completion": false
    }
}