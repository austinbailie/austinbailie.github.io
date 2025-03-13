require 'http'
require 'openssl'
require 'logger'

logger = Logger.new(STDOUT) # Log to console
logger.level = Logger::DEBUG

document = File.read('./create-hello-world.json')

logger.debug("HTTP POST Request to https://mastodon.social/inbox")

sha256        = OpenSSL::Digest::SHA256.new
digest        = "SHA-256=" + Base64.strict_encode64(sha256.digest(document))
date          = Time.now.utc.httpdate
keypair       = OpenSSL::PKey::RSA.new(File.read('private.pem'))
signed_string = "(request-target): post /inbox\nhost: mastodon.social\ndate: #{date}\ndigest: #{digest}"
signature     = Base64.strict_encode64(keypair.sign(OpenSSL::Digest::SHA256.new, signed_string))
header        = 'keyId="https://austinbailie.me/actors/earlyadopter.json#main-key",headers="(request-target) host date digest",signature="' + signature + '"'


response = HTTP.headers({ 'Host': 'mastodon.social', 'Date': date, 'Signature': header, 'Digest': digest, 'Content-Type': 'application/activity+json' })
  .post('https://mastodon.social/inbox', body: document)

logger.debug(response)
logger.debug(response.to_s)
