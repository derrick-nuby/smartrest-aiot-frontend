# SmartRest AIoT - Complete Setup Guide

## Project Overview

**SmartRest AIoT** is a Laravel-based API system fotr frontend for an intelligent mattress that enhances sleep quality and monitors health using IoT, AI, and mobile/web applications. The system tracks vital signs like heart rate, breathing patterns, temperature, and movement through embedded sensors.

### Key Features

- **Temperature Control**: Automatic mattress temperature adjustment
- **Health Monitoring**: Real-time heart rate, breathing, and movement tracking
- **Multi-Role System**: Supports patients, doctors, customers, and administrators
- **IoT Integration**: Collects and processes sensor data from smart mattresses
- **API Documentation**: Swagger/OpenAPI documentation
- **Real-time Analytics**: Health reports and sleep pattern analysis

### User Roles

- **Patient**: Hospital in-patients using the mattress
- **Doctor**: Clinicians supervising patients
- **Customer**: Retail buyers with home mattresses
- **Admin**: Hospital IT/company staff with full access

---

### Technology Stack

- **Backend**: Laravel 12 (PHP 8.2+)
- **Database**: PostgreSQL (primary), MySQL/SQLite supported
- **Authentication**: Laravel Sanctum (JWT tokens)
- **Documentation**: L5-Swagger (OpenAPI/Swagger)
- **Queue System**: Database-based queues
- **Caching**: Database/Redis
- **Frontend Build**: NEXTJS15 + TailwindCSS
