# --- Runtime image (app yahan chalegi) ---
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app

# Render ke liye port 8080 expose karte hain
EXPOSE 8080
# ASP.NET Core ko batate hain 8080 par suno
ENV ASPNETCORE_URLS=http://+:8080

# --- Build image (yahan app compile hogi) ---
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Sirf csproj copy karke restore karte hain
COPY ["MyPortfolio.csproj", "./"]
RUN dotnet restore "MyPortfolio.csproj"

# Baaki saari files copy karke publish karte hain
COPY . .
RUN dotnet publish "MyPortfolio.csproj" -c Release -o /app/publish /p:UseAppHost=false

# --- Final image: sirf publish output + runtime ---
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .

# Container start hote hi ye command chalegi
ENTRYPOINT ["dotnet", "MyPortfolio.dll"]
