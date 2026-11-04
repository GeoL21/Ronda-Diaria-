# Ronda diaria de tomas de gases medicinales — Notas para Claude

## Qué es
PWA del "Formato de ronda diaria tomas de gases medicinales" de Clínica Reina Catalina,
que reemplaza el formato en papel que llenan los técnicos de gases.
Proyecto interno, pendiente de aprobación. Sedes: Barranquilla y Baranoa.

## Dónde vive cada parte
- Código de la PWA: este repo (todo en `index.html`), publicado en GitHub Pages:
  https://geol21.github.io/Ronda-Diaria-/
- Datos: hoja de Google propia de esta app (cuenta cilindrocrc@gmail.com).
- Servidor: implementación de Apps Script de esa hoja. Su código NO está en este repo.
  La URL del servidor está en `index.html` (`API_URL`).
- Es un proyecto aparte de Control de cilindros; se guió por esa PWA, pero tiene su propia hoja y código.

## Reglas que no se cambian
- Mantener el logo de la clínica y el nombre del formato tal cual.
- Hora y día automáticos.
- Servicios = pisos o departamentos (por ejemplo UCI 1, PEDIATRÍA). Campo libre solo en MAYÚSCULAS;
  la app recuerda los ya usados para agilizar la ronda siguiente.
- Novedad: campo libre o la opción fija "SIN NOVEDAD".
- Nada puede quedar sin firmar. Si el jefe de servicio no está, firma quien lo suple. Firma con el dedo.
- La lista de técnicos se puede modificar, pero solo con clave.
- Debe funcionar sin datos ni WiFi y subir las rondas al volver la señal.
- Reporte en JPG a la mejor resolución: se descarga en el teléfono y se guarda en Drive.
- Historial por sede.
- Una ronda suele ocupar el equivalente a 3 hojas físicas.
- Todo en español, colores vino tinto de la clínica. Letra: Plus Jakarta Sans.

## Cómo trabajar aquí
- Preguntar antes de cambiar algo y mostrar un bosquejo para aprobar.
- No romper la hoja ni los registros existentes.
- Al cambiar archivos, subir el número de `VERSION` en `sw.js`.
- Este repo es público: no escribir aquí códigos de acceso, claves ni nombres del personal.
