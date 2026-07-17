# Baby Tools World

Baby Tools World is a Django-based shop application for baby products and product categories.  
The application provides product listings, product detail pages, category navigation, user authentication, and customer reviews. This version adds product tags that can be managed through the Django admin panel and displayed on product detail pages.  
The project is fully containerized and runs with Docker.

## Table of Contents

- [Quickstart](#quickstart)
- [Usage](#usage)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Docker](#docker)
- [Git Workflow](#git-workflow)

## Quickstart

### Prerequisites

Before running the project, make sure the following tools are installed:

- Git
- Docker

### Start the Application

1. Clone the repository:

```bash
git clone git@github.com:StevanAleksandrov/baby-tools-world-project.git
```

2. Navigate into the project directory:

```bash
cd baby-tools-world-project
```

3. Create the environment file from the example:

```bash
cp example.env src/.env
```

4. Build the Docker image:

```bash
docker build -t baby-tools-world:local .
```

5. Start the container:

```bash
docker run --rm -d --name baby-tools-world -p 8000:8000 --env-file src/.env baby-tools-world:local
```

6. Open the application in your browser:

```text
http://127.0.0.1:8000
```

## Usage

### Seed the Database

To load sample data into the database, run the seed command inside the running container:

```bash
docker exec -it baby-tools-world sh -c "cd /app/src && python manage.py seed_db"
```

### Admin Panel

Create a Django superuser inside the running container:

```bash
docker exec -it baby-tools-world sh -c "cd /app/src && python manage.py createsuperuser"
```

Access the admin panel at:

```text
http://127.0.0.1:8000/admin/
```

Through the admin panel, you can manage:

- Products
- Categories
- Tags
- Customer comments
- User accounts

### Product Tags

Products can be associated with one or more tags through the Django admin panel.

On the product detail page, assigned tags are displayed below the rating summary and above the buy button.

If no tags are assigned to a product, the page displays:

```text
no tags available
```

### Customer Reviews

Registered users and guests can submit product reviews with a star rating and an optional comment.

After a review has been submitted successfully, the rating selection and comment field are cleared.


## Testing

Run the Django test suite inside the running container:

```bash
docker exec -it baby-tools-world sh -c "cd /app/src && python manage.py test"
```

## Code Quality

Run formatting and linting checks inside the running container:

```bash
docker exec -it baby-tools-world sh -c "cd /app && black --check ."
docker exec -it baby-tools-world sh -c "cd /app && isort --check-only ."
docker exec -it baby-tools-world sh -c "cd /app && flake8 ."
```

To format the Python code:

```bash
docker exec -it baby-tools-world sh -c "cd /app && black ."
docker exec -it baby-tools-world sh -c "cd /app && isort ."
```

## Docker

### Show Running Containers

```bash
docker ps
```

### View Container Logs

```bash
docker logs baby-tools-world
```

### Stop the Container

```bash
docker stop baby-tools-world
```

### Rebuild the Image

If the source code changes, rebuild the image:

```bash
docker build -t baby-tools-world:local .
```

Then start the container again:

```bash
docker run --rm -d --name baby-tools-world -p 8000:8000 --env-file src/.env baby-tools-world:local
```

## Git Workflow

Development is done on a dedicated feature branch.

For this implementation, the feature branch is:

```text
add-product-tags
```

Changes are committed locally, pushed to GitHub, and reviewed through a Pull Request.

The automated pipeline must pass successfully before the review process is completed.