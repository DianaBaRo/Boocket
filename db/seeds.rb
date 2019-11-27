# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

books = Book.create([
    { title: '100 años de soledad', author: 'Gabriel García Márquez', info: '"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo".'},
    { title: 'Pedro Paramo', author: 'Juan Rulfo', info: 'El argumento se sitúa en la época de la Guerra Cristera y narra dos historias: la de un hombre llamado Juan Preciado, quien llega al pueblo de Comala para encontrar a su padre, Pedro Páramo, y cobrar el olvido en el que los mantuvo a él y a su difunta madre; y la del mismo Pedro, un cacique que con el tiempo se corrompió por el poder que le generó la Revolución.'},
    { title: 'Como agua para chocolate', author: 'Laura Esquivel', info: 'Tita y Pedro se aman. Pero ella está condenada a permanecer soltera, cuidando a su madre hasta que ésta muera. Y Pedro, para estar cerca de Tita, se casa con la hermana de ella, Rosaura. Las recetas de cocina que Tita elabora puntean el paso de las estaciones de su vida, siempre marcada por la presente ausencia de Pedro.'}
])