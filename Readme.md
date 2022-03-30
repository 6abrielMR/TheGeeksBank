# The Geeks Bank App

The Geeks Bank App is a project made with .Net 3.1, SqlServer and ReactJs 18 (Redux was used), in TheGeeksBank.Api is the backend development and the-geeks-bank is the frontend development.<br><br>
![TheGeeksBankApp](https://res.cloudinary.com/denxbaa7e/image/upload/v1648619064/fff7j3xhdauyoqkmofre.png)
<br><br>

## Installation Frontend

Use the node [npm](https://github.com/nodejs/nodejs.dev) package manager to install the project dependencies.

```bash
npm install --save
```

## Configuration

First you must configure the backend connection url in the .env.development & .env.production file, by default the following is configured.

```bash
# If different, change it
REACT_APP_API_URL=https://localhost:5001/api/
```

## Usage

```bash
# start project locally
npm start
```

<br>

---

---

<br>

## Installation Backend

Use the net core 3.1 [dotnet](https://github.com/dotnet/core) to install and restore packages.

Note: if in Visual Studio it will automatically restore the project.

```bash
dotnet restore
```

## Configuration

Before starting the project, create the database with the name 'TheGeeksBankDb' and configure the connection keys in the appsettings.json file.

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "ConnectionStrings": {
    "DevConnection": "Server=localhost;Database=TheGeeksBankDb;User=SA;Password=YOUR_PASSWORD;Trusted_Connection=False;MultipleActiveResultSets=True;"
  },
  "AllowedHosts": "*"
}
```

Then the migrations must be executed.

```bash
# Can be run from a PoweShell
dotnet ef migrations add Inicial
dotnet ef database update
```

## Usage

```bash
# start project locally
dotnet run
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
