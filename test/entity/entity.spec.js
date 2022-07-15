import { expect } from 'chai'
import { describe, it } from 'mocha'
import Song from '../../entity/Song.js'
import Artist from '../../entity/Artist.js'
import User from '../../entity/User.js'

// escribiendo un test
describe('Tesing Song Class', () => {
  // set up class and instance
  const song = new Song({
    title: 'title',
    uri: 'uri',
    duration: 'duration',
    image: 'image',
    idArtist: 'idArtist',
    idGenre: 'idGenre'
  })
  it('class should not be null', () => {
    expect(song).to.not.equal(null)
  })
  it('should have a title', () => {
    expect(song._title).to.equal('title')
  })
  it('should return a number', () => {
    const result = song.returnNumber()
    expect(result).to.equal(5)
  })
})

describe('Tesing Artist Class', () => {
  // set up class and instance
  const artist = new Artist({
    firstname: 'artist1',
    lastname: 'lastname1',
    avatar: 'avatar'
  })
  it('class should not be null', () => {
    expect(artist).to.not.equal(null)
  })
  it('should have a first name', () => {
    expect(artist._firstname).to.equal('firstname')
  })
  it('last name should have a value', () => {
    const result = artist._lastname
    expect(result).to.not.equal(null)
  })
})

describe('Tesing User Class', () => {
  // set up class and instance
  const user = new User({
    username: 'user1',
    email: 'email@email.com',
    password: 'pass123'
  })
  it('class should not be null', () => {
    expect(user).to.not.equal(null)
  })
  it('should have a username', () => {
    expect(user._username).to.equal('username')
  })
  it('should have a password', () => {
    const result = user._password
    expect(result).to.not.equal(null)
  })
})
