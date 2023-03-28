Travel.create(
    nome: Faker::Nation.capital_city,
    data: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :all),
    desc: Faker::Travel::Airport.name(size: 'large', region: 'united_states'),
    price: Faker::Number.decimal(l_digits: 2),
)

puts Travel.last