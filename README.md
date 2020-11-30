#Using Job Board API 

This is the documentation for Version 1 (v1) of the Job Board API.

##Response Formats

The default response format is JSON.

##Authentication

The API do not require an access key for routes.

##Prefixed

All routes need to be prefixed with localhost:5000

##Users Routes 

Return all users in the database
```
GET /users
[
  {
    "birthday": "Fri, 29 Mar 1985 00:00:00 GMT", 
    "companies_name": null, 
    "firstname": "Geoffroy", 
    "password": "TOTO", 
    "user_name": "Pailhe-Belair", 
    "user_phone": "0679299366", 
    "users_address": "118 rue abbée de l'épée", 
    "users_email": "geoffroy.pailhe-belair@epitech.eu"
  }, 
  {
    "birthday": "Tue, 08 Dec 1998 00:00:00 GMT", 
    "companies_name": "Epitech", 
    "firstname": "Alexandra", 
    "password": "tata", 
    "user_name": "Ricardo", 
    "user_phone": "0600000000", 
    "users_address": "33 rue toto", 
    "users_email": "alexandra.ricardo@epitech.eu"
  } 
]

```

Return one specific user

```
GET /users/{user_id}

[
  {
    "birthday": "Tue, 08 Dec 1998 00:00:00 GMT", 
    "companies_name": "Epitech", 
    "firstname": "Alexandra", 
    "password": "tata", 
    "token": "ewrxdtcfygvubhjn", 
    "user_name": "Ricardo", 
    "user_phone": "0600000000", 
    "users_address": "33 rue toto", 
    "users_email": "alexandra.ricardo@epitech.eu"
  } 
]
```

Créer un utilisateur : 
```
POST /users 

{
    "birthday": "Tue, 08 Dec 1998 00:00:00 GMT", 
    "companies_name": "Epitech", 
    "firstname": "Alexandra", 
    "password": "tata", 
    "token": "ewrxdtcfygvubhjn", 
    "user_name": "Ricardo", 
    "user_phone": "0600000000", 
    "users_address": "33 rue toto", 
    "users_email": "alexandra.ricardo@epitech.eu"
  } 
```

Supprimer un utilisateur : 
```
DELETE /users/{id}
{
        "id": 3,
        "deleted":true
    }
```

Modifier un utilisateur :
```
PATCH /users/{id}

{
        "id": 3,
        "modified":true
    }
```
##Companies routes

Return all companies in the database

```
GET /companies

[
  {
    "activity": "informatique", 
    "address": "16 rue Théodore Blanc", 
    "city_list": "Bordeaux", 
    "description_company": "Ecole d'ingénierie informatique proposant un grand nombre de cursus dans différents domaines liés à l'informatique et reconnue nationalement et internationalement", 
    "email": "contact@epitech.eu", 
    "name": "Epitech", 
    "phone": "0556123456", 
    "website": "epitech.eu"
  },

  {
    "activity": "cosm\u00e9tique", 
    "address": "36 cours Toto", 
    "city_list": "Bordeaux", 
    "description_company": "Compagnie important et exportant les recettes typiques du monde de toto et de ses nombreuses blagues", 
    "email": "email@mail.fr", 
    "name": "La compagnie de toto", 
    "phone": "0556000000", 
    "website": "toto.com"
  }
]
```
Return one specific company
```GET /companies/{company_id}
[
 {
    "activity": "cosm\u00e9tique", 
    "address": "36 cours Toto", 
    "city_list": "Bordeaux", 
    "description_company": "Compagnie important et exportant les recettes typiques du monde de toto et de ses nombreuses blagues", 
    "email": "email@mail.fr", 
    "name": "La compagnie de toto", 
    "phone": "0556000000", 
    "website": "toto.com"
  }
]

```
Créer une entreprise : 
```
POST /companies 

{
    "activity": "informatique", 
    "address": "16 rue Théodore Blanc", 
    "city_list": "Bordeaux", 
    "description_company": "Ecole d'ingénierie informatique proposant un grand nombre de cursus dans différents domaines liés à l'informatique et reconnue nationalement et internationalement", 
    "email": "contact@epitech.eu", 
    "name": "Epitech", 
    "phone": "0556123456", 
    "website": "epitech.eu"
  },
```

Supprimer une entreprise : 
```
DELETE /companies/{id}
{
        "id": 3,
        "deleted":true
    }
```
Modifier une entreprise :
```
PATCH /comapanies/{id}
{
        "id": 3,
        "modified":true
    }
```

##Advertisements routes

Return all advertisements in the database.

``` GET /advertisements

[
  {
    "city_list": "Lyon", 
    "date": "Wed, 30 Sep 2020 00:00:00 GMT", 
    "description": "Notre soci\u00e9t\u00e9 cherche un auteur pour cr\u00e9er de nouvelles blagues. Votre profil: vous \u00eates quelqu'un de dr\u00f4le et d\u00e9sopilant pour r\u00e9inventer le monde de Toto", 
    "job_type": "m\u00e9decin", 
    "name": "La compagnie de toto", 
    "salary": 35000, 
    "type_contract": "CDI", 
    "type_experience": "senior", 
    "week_worktime": "temps plein"
  }, 
  {
    "city_list": "Pessac", 
    "date": "Wed, 30 Sep 2020 00:00:00 GMT", 
    "description": "Dans le cadre de notre d\u00e9veloppement nous recherchons un dev pour am\u00e9liorer nos infrastructures web. Votre profil: Vous \u00eates \u00e0 l'aise autant avec les technos front que web", 
    "job_type": "d\u00e9veloppeur fullstack", 
    "name": "Epitech", 
    "salary": 45000, 
    "type_contract": "apprentissage/alternance", 
    "type_experience": "plus de 10 ans", 
    "week_worktime": "temps plein"
  }
]
```
Return one advertisement 

```
GET /advertisement/{id}

[
{
    "city_list": "Pessac", 
    "date": "Wed, 30 Sep 2020 00:00:00 GMT", 
    "description": "Dans le cadre de notre d\u00e9veloppement nous recherchons un dev pour am\u00e9liorer nos infrastructures web. Votre profil: Vous \u00eates \u00e0 l'aise autant avec les technos front que web", 
    "job_type": "d\u00e9veloppeur fullstack", 
    "name": "Epitech", 
    "salary": 45000, 
    "type_contract": "apprentissage/alternance", 
    "type_experience": "plus de 10 ans", 
    "week_worktime": "temps plein"
  }
]
```

Créer une annonce : 
```
POST /advertisements 

{
    "city_list": "Pessac", 
    "date": "Wed, 30 Sep 2020 00:00:00 GMT", 
    "description": "Dans le cadre de notre d\u00e9veloppement nous recherchons un dev pour am\u00e9liorer nos infrastructures web. Votre profil: Vous \u00eates \u00e0 l'aise autant avec les technos front que web", 
    "job_type": "d\u00e9veloppeur fullstack", 
    "name": "Epitech", 
    "salary": 45000, 
    "type_contract": "apprentissage/alternance", 
    "type_experience": "plus de 10 ans", 
    "week_worktime": "temps plein"
  }
```

Supprimer une annonce :
```
DELETE /advertisements/{id}
{
        "id": 3,
        "deleted":true
    }
```
Modifier une annonce :
```
PATCH /advertisements/{id}
{
        "id": 3,
        "modified":true
    }
```


##Cities routes

Return all cities 

```
GET /cities

[
    {
        "city": "Bordeaux",
        "id": 1,
        "zipcode": "33000"
    },
    {
        "city": "Paris 16",
        "id": 2,
        "zipcode": "75016"
    },
    {
        "city": "Pessac",
        "id": 3,
        "zipcode": "33600"
    }
]
```
Créer une ville :

```
POST /cities

 {
        "city": "Bordeaux",
        "id": 1,
        "zipcode": "33000"
    }
```

Supprimer une ville :
```
DELETE /cities/{id}

{
        "id": 3,
        "deleted":true
    }
```
Modifier une ville :
```
PATCH /cities/{id}

{
        "id": 3,
        "modified":true
    }
```

##ContractTypes routes
Return all contracts type

```
GET /contracts

[
    {
        "id": 1,
        "type_contract": "CDD"
    },
    {
        "id": 2,
        "type_contract": "CDI"
    },
    {
        "id": 3,
        "type_contract": "Stage"
    },
    {
        "id": 4,
        "type_contract": "freelance"
    },
    {
        "id": 5,
        "type_contract": "apprentissage/alternance"
    }
]
```
Créer un type de contract : 
```
POST /contracts 

{
        "id": 5,
        "type_contract": "apprentissage/alternance"
    }
```

Supprimer un type de contrat: 
```
DELETE /contracts/{id}
{
        "id": 3,
        "deleted":true
    }
```
Modifier un type de contrat :
```
PATCH /contracts/{id}
{
        "id": 3,
        "modified":true
    }
```

##JobApplications routes

Return all appications

```
GET /job-applications

[
    {
        "date": "Wed, 30 Sep 2020 00:00:00 GMT",
        "email": "",
        "firstname": "",
        "id": 2,
        "id_advertisements": 2,
        "id_users": 2,
        "message": "",
        "name": "",
        "phone": ""
    },
    {
        "date": "Wed, 30 Sep 2020 00:00:00 GMT",
        "email": "",
        "firstname": "",
        "id": 3,
        "id_advertisements": 3,
        "id_users": 3,
        "message": "",
        "name": "",
        "phone": ""
    }
]
```

Return one job application :
```
GET /job-applications/{id}
 
[
   {
        "date": "Wed, 30 Sep 2020 00:00:00 GMT",
        "email": "",
        "firstname": "",
        "id": 3,
        "id_advertisements": 3,
        "id_users": 3,
        "message": "",
        "name": "",
        "phone": ""
    }
]
```
Créer une annonce : 
```
POST /job-applications 

{
        "date": "Wed, 30 Sep 2020 00:00:00 GMT",
        "email": "",
        "firstname": "",
        "id": 2,
        "id_advertisements": 2,
        "id_users": 2,
        "message": "",
        "name": "",
        "phone": ""
    }
```

Supprimer une candidature
```
DELETE /job-applications/{id}
{
        "id": 3,
        "deleted":true
    }
```
Modifier une candidature: 
```
PATCH /job-applications/{id}

{
        "id": 3,
        "modified":true
    }
```
##Jobs routes

Return all jobs

```GET /jobs
[
    {
        "id": 1,
        "job_type": "maquilleuse"
    },
    {
        "id": 2,
        "job_type": "développeur web"
    },
    {
        "id": 3,
        "job_type": "médecin"
    }
]
```
Créer un métier : 
```
POST /jobs 

{
        "id": 1,
        "job_type": "maquilleuse"
    }
```

Supprimer un métier :
```
DELETE /jobs/{id}
{
        "id": 3,
        "deleted":true
    }
```

Modifier un métier :
```
PATCH /jobs/{id}

{
        "id": 3,
        "modified":true
    }
```



##UserTypes routes

Return all user type

```
GET /usertypes

[
    {
        "id": 1,
        "role": "user"
    },
    {
        "id": 2,
        "role": "company_user"
    },
    {
        "id": 3,
        "role": "admin"
    }
]
```

Créer un type d'utilisateur : 
```
POST /usertypes 

{
        "id": 1,
        "role": "user"
    }
```
Supprimer un type d'utilisateur:
```
DELETE /usertypes/{id}
{
        "id": 3,
        "deleted":true
    }

```

Modifier un type d'utilisateur:
```
PATCH /usertypes/{id}

{
        "id": 3,
        "modified":true
    }

```